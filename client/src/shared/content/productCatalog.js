import vest1 from '../../../../mgAssets/vest-1.png'
import vest2 from '../../../../mgAssets/vest-2.png'
import vest3 from '../../../../mgAssets/vest-3.png'
import vest4 from '../../../../mgAssets/vest-4.png'
import vest5 from '../../../../mgAssets/vest-5.png'
import vest6 from '../../../../mgAssets/vest-6.png'
import { translations } from '../i18n/LanguageContext'

const vestImages = [vest1, vest2, vest3, vest4, vest5, vest6]

export function getProductCards(t) {
  return vestImages.map((src, index) => {
    const fallbackCard = translations.en.products.cards[index]
    const card = t.products.cards[index] ?? fallbackCard

    return {
      slug: card.slug ?? fallbackCard.slug,
      src,
      title: card.title ?? fallbackCard.title,
      overview: card.overview ?? fallbackCard.overview,
      description: card.description?.length ? card.description : fallbackCard.description,
      set: card.set?.length ? card.set : fallbackCard.set,
    }
  })
}
