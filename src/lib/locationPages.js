export const locationPages = [
  {
    slug: 'kochi',
    title: 'Wedding Photography in Kochi',
    h1: 'Wedding Photography in Kochi | Candid Kerala Weddings',
    description:
      'Kochi wedding photography by FocusMedia Productions — candid coverage of Christian, Hindu & Muslim ceremonies across Ernakulam, Fort Kochi, and nearby venues.',
    keywords: [
      'wedding photography kochi',
      'wedding photographer kochi',
      'candid wedding photography kochi',
      'kochi wedding photographer',
    ],
    intro:
      'Kochi is where FocusMedia Productions is based — and where we have documented hundreds of weddings across Ernakulam, Edappally, Kakkanad, and the heritage lanes of Fort Kochi. From grand hotel receptions to intimate home ceremonies, Kochi weddings move fast and demand a team that anticipates moments before they happen.',
    body: `
      <p>City weddings in Kochi often span multiple venues in a single day: a morning temple or church ceremony, an afternoon portrait session, and an evening reception with live music and dancing. We plan coverage around Kerala traffic and monsoon-season light so your gallery reflects the full story, not just the staged highlights.</p>
      <p>Fort Kochi and Mattancherry offer colonial architecture, waterfront backdrops, and golden-hour lanes perfect for couple portraits. We recommend scheduling a dedicated portrait window during late afternoon when the heat eases and the light turns warm and cinematic.</p>
      <p>Whether you are planning a traditional Kerala Christian reception, a Hindu ceremony with thaali rituals, or a Muslim nikah followed by a walima, our documentary approach keeps you present in your day while we capture it honestly.</p>
    `,
  },
  {
    slug: 'munnar',
    title: 'Wedding Photography in Munnar',
    h1: 'Wedding Photography in Munnar | Tea Estate & Hill Station Weddings',
    description:
      'Munnar wedding and pre-wedding photography among tea estates and misty hills — FocusMedia Productions covers destination celebrations across Kerala\'s high ranges.',
    keywords: [
      'wedding photography munnar',
      'munnar pre wedding shoot',
      'tea estate wedding photography kerala',
    ],
    intro:
      'Munnar\'s rolling tea estates, misty mornings, and dramatic hill-station light make it one of Kerala\'s most sought-after backdrops for pre-wedding shoots and intimate destination weddings.',
    body: `
      <p>Shooting in Munnar requires planning around weather and altitude. Early mornings often bring soft fog across the estates — ideal for romantic, editorial portraits. Midday sun can be harsh on open slopes; we schedule couple sessions for sunrise or the hour before sunset whenever possible.</p>
      <p>Resort weddings in Munnar frequently combine multi-day celebrations with guest activities. We coordinate with planners on ceremony timing so we are in position for key rituals without interrupting the flow of your weekend.</p>
      <p>Travel from Kochi typically takes three to four hours. We factor lodging and transport into destination quotes transparently so there are no surprises on your invoice.</p>
    `,
  },
  {
    slug: 'alleppey',
    title: 'Wedding Photography in Alleppey',
    h1: 'Wedding Photography in Alleppey | Backwater Wedding Photography',
    description:
      'Alleppey and Alappuzha backwater wedding photography — houseboat celebrations, lakeside ceremonies, and candid Kerala wedding coverage by FocusMedia Productions.',
    keywords: [
      'wedding photography alleppey',
      'wedding photography alappuzha',
      'backwater wedding photography kerala',
    ],
    intro:
      'Alleppey\'s backwaters — houseboats, coconut groves, and golden reflections on the water — create a uniquely Kerala setting for weddings and post-wedding shoots.',
    body: `
      <p>Backwater weddings often unfold across a houseboat, a lakeside resort, and a family home. Each setting brings different light: open water reflects bright midday sun, while shaded groves offer soft, even illumination for group portraits.</p>
      <p>We have documented post-wedding sessions along the Alleppey waterways where couples wanted relaxed, cinematic images away from the main event rush. These sessions work beautifully in the late afternoon when the water turns gold.</p>
      <p>Logistics matter on the backwaters — we arrive early to scout mooring points and coordinate with boat crews so we never miss a departure or arrival moment.</p>
    `,
  },
  {
    slug: 'fort-kochi',
    title: 'Wedding Photography in Fort Kochi',
    h1: 'Wedding Photography in Fort Kochi | Heritage & Colonial Backdrops',
    description:
      'Fort Kochi wedding photography with heritage architecture, waterfront lanes, and candid editorial portraits — FocusMedia Productions, Kochi.',
    keywords: [
      'wedding photographer fort kochi',
      'fort kochi pre wedding photography',
      'heritage wedding photography kochi',
    ],
    intro:
      'Fort Kochi\'s colonial streets, Chinese fishing nets, and art-gallery cafés offer a distinctive heritage backdrop for pre-wedding shoots and intimate wedding portraits.',
    body: `
      <p>Heritage locations in Fort Kochi reward couples who embrace walking sessions — narrow lanes, pastel walls, and sea breeze create an editorial feel without heavy staging. We guide you to less-crowded pockets while respecting the neighbourhood\'s character.</p>
      <p>Weekend tourism can mean busy streets. Early weekday mornings or weekday evenings often produce the cleanest backgrounds and the most comfortable shooting conditions.</p>
      <p>Many Kochi couples schedule a Fort Kochi portrait session separate from their main wedding day, giving room to explore creative compositions without the pressure of a reception timeline.</p>
    `,
  },
  {
    slug: 'kozhikode',
    title: 'Wedding Photography in Kozhikode',
    h1: 'Wedding Photography in Kozhikode | North Kerala Wedding Coverage',
    description:
      'Kozhikode and Calicut wedding photography — FocusMedia Productions travels north Kerala for candid Muslim, Hindu, and Christian wedding coverage.',
    keywords: [
      'wedding photography kozhikode',
      'wedding photographer calicut',
      'north kerala wedding photography',
    ],
    intro:
      'Kozhikode (Calicut) weddings blend rich Malabar traditions with grand receptions and multi-day celebrations. We travel from our Kochi studio to cover north Kerala with the same candid, cinematic approach.',
    body: `
      <p>North Kerala weddings often include extended family gatherings, detailed mehndi and sangeet events, and large guest lists. Coverage plans account for longer timelines and multiple outfit changes across the celebration.</p>
      <p>Coastal Kozhikode venues offer beach and sunset options; inland halls favour dramatic reception lighting. We adapt flash and natural-light techniques to each space so skin tones stay flattering in every frame.</p>
      <p>Travel and accommodation from Kochi are included transparently in quotes for Kozhikode events. Contact us early — Malabar wedding season dates book quickly.</p>
    `,
  },
];

export function getLocationPage(slug) {
  return locationPages.find((page) => page.slug === slug);
}
