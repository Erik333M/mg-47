import vest1 from '../../../../mgAssets/vest-1.png'
import vest2 from '../../../../mgAssets/vest-2.png'
import vest3 from '../../../../mgAssets/vest-3.png'
import vest4 from '../../../../mgAssets/vest-4.png'
import vest5 from '../../../../mgAssets/vest-5.png'
import vest6 from '../../../../mgAssets/vest-6.png'
import plateCarrier from '../../../../mgAssets/asset-47/plaiteCarrier.png'
import droneCarrier from '../../../../mgAssets/asset-47/droneCarrier.png'
import backpack15 from '../../../../mgAssets/asset-47/15-20Backpag.png'
import backpack35 from '../../../../mgAssets/asset-47/35-40Backpag.png'
import backpack85 from '../../../../mgAssets/asset-47/85-90Backpag.png'
import tacticalPouches from '../../../../mgAssets/asset-47/TacticalPouches.png'
import { translations } from '../i18n/LanguageContext'

// Order here must match the order of `products.cards` in LanguageContext.
// `wide` marks landscape photos that should be shown whole instead of cropped.
const productImages = [
  { src: vest1 },
  { src: vest2 },
  { src: vest3 },
  { src: vest4 },
  { src: vest5 },
  { src: vest6 },
  { src: plateCarrier, wide: true },
  { src: droneCarrier, wide: true },
  { src: backpack15, wide: true },
  { src: backpack35, wide: true },
  { src: backpack85, wide: true },
  { src: tacticalPouches, wide: true },
]

export function getProductCards(t) {
  return productImages.map(({ src, wide = false }, index) => {
    const fallbackCard = translations.en.products.cards[index]
    const card = t.products.cards[index] ?? fallbackCard

    return {
      slug: card.slug ?? fallbackCard.slug,
      src,
      wide,
      title: card.title ?? fallbackCard.title,
      overview: card.overview ?? fallbackCard.overview,
      description: card.description?.length ? card.description : fallbackCard.description,
      set: card.set?.length ? card.set : fallbackCard.set,
    }
  })
}
