import { siteImages } from './imagePaths';

export const blogs = [
  {
    slug: 'the-art-of-destination-weddings',
    title: 'The Art of Destination Weddings',
    date: 'October 15, 2026',
    category: 'Weddings',
    excerpt: 'Planning a wedding abroad? Here are our top tips for ensuring your memories are captured beautifully against stunning landscapes.',
    content: `
      <p>Destination weddings offer an incredible backdrop for your special day. From the rolling hills of Tuscany to the pristine beaches of Bali, getting married in a location that holds a special place in your heart adds an undeniable layer of magic to the proceedings.</p>
      
      <h3>Why Choose a Destination Wedding?</h3>
      <p>Choosing a destination wedding means opting for an adventure. It shifts the focus from a single day of celebration to an extended experience shared with your closest family and friends. It strips away the unnecessary formalities, leaving room only for what truly matters: connection and celebration.</p>
      
      <h3>Embracing the Environment</h3>
      <p>As photographers, our primary goal in a destination setting is to let the environment speak just as loudly as the moments unfolding within it. We love finding unique lighting situations, playing with dramatic landscapes, and capturing the authentic essence of the locale. We highly recommend allocating ample time for portraits to truly utilize the scenery you traveled so far to reach.</p>
      
      <p>Ultimately, a destination wedding is a beautiful, chaotic, and utterly romantic adventure. Ensure you choose a photographer who knows how to adapt to new environments and capture the profound beauty of your chosen destination.</p>
    `,
    image: siteImages.hero,
  },
  {
    slug: 'finding-the-perfect-light',
    title: 'Finding the Perfect Light',
    date: 'September 22, 2026',
    category: 'Editorials',
    excerpt: 'Light is the ultimate tool in photography. We delve into how natural light shapes our editorial approach and why "golden hour" reigns supreme.',
    content: `
      <p>Light is the universal language of photography. It dictates the mood, the tone, and the emotion of an image. But for our studio, light is more than just illumination—it is a compositional element as vital as the subjects themselves.</p>
      
      <h3>The Magic of Golden Hour</h3>
      <p>You have likely heard photographers rave about "golden hour"—that fleeting window of time shortly after sunrise and just before sunset. During this time, the sun is low on the horizon, creating a soft, diffused, and incredibly warm light. It acts as a natural filter, flattering skin tones and creating a romantic, cinematic glow that is unmistakable. We always urge our couples to schedule their portrait sessions during this magical window.</p>
      
      <h3>Embracing Shadows</h3>
      <p>While bright, airy lighting is classic, we deeply believe in the power of shadows. Contrast brings depth, drama, and a distinct editorial edge. By deliberately playing with shadows, we can sculpt faces, highlight textures, and draw the viewer's eye exactly where we want it.</p>
      
      <p>Let light be your guide, and trust your photographer to hunt for those perfectly lit moments.</p>
    `,
    image: siteImages.intro.main,
  },
  {
    slug: 'capturing-the-details',
    title: 'Capturing the Quiet Details',
    date: 'August 10, 2026',
    category: 'Details',
    excerpt: 'The grand moments are essential, but the quiet, unseen details are what weave the full narrative of your wedding day.',
    content: `
      <p>The first kiss, the grand entrance, the tearful toasts—these are the undeniable milestones of a wedding day. However, a wedding is composed of a million micro-moments. It is these quiet, often unseen details that truly give a wedding its unique heartbeat.</p>
      
      <h3>The Narrative of Objects</h3>
      <p>A frayed ribbon on a vintage bouquet, the delicate lace of a grandmother's veil, the handwritten vows on textured paper—these objects hold immense semantic value. They are physical manifestations of the love, history, and effort poured into the celebration. By taking the time to artfully capture these details, we preserve the tactile memory of the day.</p>
      
      <h3>The In-Between Moments</h3>
      <p>Just as important as the physical details are the "in-between" moments. A quiet glance shared across a crowded room, the nervous exhale before walking down the aisle, a burst of unfiltered laughter during getting ready. These unscripted moments are the honest, messy, and beautiful reality of your day.</p>
      
      <p>We pride ourselves on being observant, unobtrusive, and ever-ready to document the quiet elegance of the subtle things.</p>
    `,
    image: siteImages.intro.bouquet,
  }
];

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug);
}
