import { Canvas, Image, useImage, useTouchHandler } from "@shopify/react-native-skia";
import React, { useEffect, useMemo, useState } from 'react';
import { useSharedValue, withSpring } from "react-native-reanimated";

const PAGE_SIZE = 5;

export const StickerDrawer = ({ stickers }: { stickers: any[] }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // MEMORY GUARD: Only process 5 stickers at a time
  const visibleStickers = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return stickers.slice(start, start + PAGE_SIZE);
  }, [currentPage, stickers]);

  return (
    <Canvas style={{ height: 200, width: '100%', backgroundColor: '#f0f0f0' }}>
      {visibleStickers.map((s, index) => (
        <StickerItem 
          key={`${s.id}-${currentPage}`} // Force re-mount to trigger cleanup
          id={s.id}
          assetPath={s.skia_asset} 
          index={index} 
        />
      ))}
    </Canvas>
  );
};

const StickerItem = ({ assetPath, index, id }: any) => {
  const image = useImage(assetPath);
  const x = useSharedValue(20 + index * 110);
  const y = useSharedValue(50);
  const scale = useSharedValue(1);

  // INSTRUCTION 1: Skia Memory Guard (Nullify JSI references)
  useEffect(() => {
    return () => {
      if (image) image.dispose(); 
    };
  }, [image]);

  const onTouch = useTouchHandler({
    onStart: () => { scale.value = withSpring(1.2); },
    onActive: (pt) => {
      x.value = pt.x - 50;
      y.value = pt.y - 50;
    },
    onEnd: () => { 
      scale.value = withSpring(1);
      // NEXT STEP: This is where we trigger the ChallengeOverlay
    },
  });

  if (!image) return null;

  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={100}
      height={100}
      transform={[{ scale: scale.value }]}
    />
  );
};