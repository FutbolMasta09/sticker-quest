import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import React, { useEffect, useMemo, useState } from 'react';

const PAGE_SIZE = 5;

export const StickerDrawer = ({ stickers }: { stickers: any[] }) => {
  const [currentPage] = useState(0);

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

  // INSTRUCTION 1: Skia Memory Guard (Nullify JSI references)
  useEffect(() => {
    return () => {
      if (image) image.dispose();
    };
  }, [image]);

  if (!image) return null;

  return (
    <Image
      image={image}
      x={20 + index * 110}
      y={50}
      width={100}
      height={100}
    />
  );
};