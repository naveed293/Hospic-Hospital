/**
 * Central image registry.
 *
 * Local images live in /public/images and are imported here so Vite bundles
 * them into the build (works even when only the single dist/index.html is served).
 * The remaining photos are royalty-free stock images served from Pexels.
 */
import hero from '../../public/images/hero.jpg';
import aboutPrimary from '../../public/images/about-1.jpg';
import aboutSecondary from '../../public/images/about-2.jpg';
import whyChoose from '../../public/images/why-choose.jpg';
import surgery from '../../public/images/surgery.jpg';
import ctaDoctor from '../../public/images/cta-doctor.jpg';
import testimonialVideo1 from '../../public/images/testimonial-1.jpg';
import testimonialVideo2 from '../../public/images/testimonial-2.jpg';
import blog1 from '../../public/images/blog-1.jpg';
import blog2 from '../../public/images/blog-2.jpg';

/** Builds an optimised Pexels CDN url. Pass `h` to get a centre-cropped image. */
const pexels = (id: number, w: number, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${
    h ? `&h=${h}&fit=crop` : ''
  }`;

export const images = {
  // Local (bundled) images
  hero,
  aboutPrimary,
  aboutSecondary,
  whyChoose,
  surgery,
  ctaDoctor,
  testimonialVideo1,
  testimonialVideo2,
  blog1,
  blog2,

  // Stock images
  heroCardDoctor: pexels(32254658, 320),
  heroAvatars: [pexels(3936894, 120, 120), pexels(14950779, 120, 120), pexels(6102841, 120, 120)],
  avatars: {
    ethan: pexels(6102841, 120, 120),
    maria: pexels(3936894, 120, 120),
    james: pexels(35681211, 120, 120),
    noah: pexels(14950779, 120, 120),
  },
  services: {
    emergency: pexels(6754174, 600),
    general: pexels(18870282, 600),
    women: pexels(7108418, 600),
    imaging: pexels(4226123, 600),
  },
  departments: {
    cardiology: pexels(5207116, 720),
    neurology: pexels(4226219, 720),
    radiology: pexels(13176356, 720),
    orthopedics: pexels(20860595, 720),
  },
  doctors: {
    hayes: pexels(32254658, 720),
    bennett: pexels(17829429, 720),
    reed: pexels(38618415, 720),
    turner: pexels(16552437, 720),
    mitchell: pexels(32160037, 720),
    morgan: pexels(38618419, 720),
  },
};

export const videos = {
  patientStory: 'https://videos.pexels.com/video-files/6129936/6129936-hd_1920_1080_30fps.mp4',
};
