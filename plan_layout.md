1. Modify `data/networkContent.ts`
   - Add `listImage` and change `image` logic? Or just `detailImage: string | string[]`
   - Archipelago: detailImage: "/images/global-network-archipelago-detail.jpg" (assuming we use placeholder name)
   - KADIN: detailImage: "/images/global-network-kadin-detail.jpg"
   - S Media Group: detailImages: [
       "/images/global-network-smedia-1.jpg",
       "/images/global-network-smedia-2.jpg",
       "/images/global-network-smedia-3.jpg",
       "/images/global-network-smedia-4.jpg",
       "/images/global-network-smedia-5.jpg",
     ]
2. Modify `app/global-network/page.tsx`
   - ensure it uses `item.listImage` or `item.image`
3. Modify `app/global-network/[slug]/page.tsx`
   - if `item.detailImages` is array, render the collage masonry layout.
   - if `item.detailImage` is string, render the single image layout.
