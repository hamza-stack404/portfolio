'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface TouchPosition {
  x: number;
  y: number;
  timestamp: number;
}

interface SwipeGesture {
  direction: 'up' | 'down' | 'left' | 'right' | null;
  velocity: number;
  distance: number;
}

interface PinchGesture {
  scale: number;
  isPinching: boolean;
}

export function useSwipeGesture(
  onSwipe?: (gesture: SwipeGesture) => void,
  threshold = 50
) {
  const [swipeGesture, setSwipeGesture] = useState<SwipeGesture>({
    direction: null,
    velocity: 0,
    distance: 0,
  });

  const touchStart = useRef<TouchPosition | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        timestamp: Date.now(),
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      const deltaTime = Date.now() - touchStart.current.timestamp;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > threshold || absY > threshold) {
        let direction: 'up' | 'down' | 'left' | 'right';

        if (absX > absY) {
          direction = deltaX > 0 ? 'right' : 'left';
        } else {
          direction = deltaY > 0 ? 'down' : 'up';
        }

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const velocity = distance / deltaTime;

        const gesture: SwipeGesture = {
          direction,
          velocity,
          distance,
        };

        setSwipeGesture(gesture);
        onSwipe?.(gesture);
      }

      touchStart.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [threshold, onSwipe]);

  return swipeGesture;
}

export function usePinchZoom(
  onPinch?: (gesture: PinchGesture) => void
) {
  const [pinchGesture, setPinchGesture] = useState<PinchGesture>({
    scale: 1,
    isPinching: false,
  });

  const initialDistance = useRef<number | null>(null);

  useEffect(() => {
    const getDistance = (touches: TouchList) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        initialDistance.current = getDistance(e.touches);
        setPinchGesture((prev) => ({ ...prev, isPinching: true }));
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && initialDistance.current) {
        e.preventDefault();
        const currentDistance = getDistance(e.touches);
        const scale = currentDistance / initialDistance.current;

        const gesture: PinchGesture = {
          scale,
          isPinching: true,
        };

        setPinchGesture(gesture);
        onPinch?.(gesture);
      }
    };

    const handleTouchEnd = () => {
      initialDistance.current = null;
      setPinchGesture({
        scale: 1,
        isPinching: false,
      });
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onPinch]);

  return pinchGesture;
}

export function useLongPress(
  onLongPress: () => void,
  duration = 500
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPressed, setIsPressed] = useState(false);

  const start = useCallback(() => {
    setIsPressed(true);
    timeoutRef.current = setTimeout(() => {
      onLongPress();
      setIsPressed(false);
    }, duration);
  }, [onLongPress, duration]);

  const cancel = useCallback(() => {
    setIsPressed(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isPressed,
    handlers: {
      onTouchStart: start,
      onTouchEnd: cancel,
      onTouchMove: cancel,
    },
  };
}

export function useHapticFeedback() {
  const vibrate = useCallback((pattern: number | number[] = 10) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }, []);

  const light = useCallback(() => vibrate(10), [vibrate]);
  const medium = useCallback(() => vibrate(20), [vibrate]);
  const heavy = useCallback(() => vibrate(30), [vibrate]);
  const success = useCallback(() => vibrate([10, 50, 10]), [vibrate]);
  const error = useCallback(() => vibrate([20, 50, 20]), [vibrate]);

  return {
    vibrate,
    light,
    medium,
    heavy,
    success,
    error,
  };
}
