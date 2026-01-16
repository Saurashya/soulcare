export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  benefits: string[];
  whoItsFor: string[];
  duration?: string;
  price?: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'hypnotherapy',
    title: 'Clinical Hypnotherapy',
    description: 'Experience deep transformation through guided hypnosis. Our clinical hypnotherapy sessions help you access your subconscious mind to release limiting beliefs, overcome fears, and create lasting positive change.',
    shortDescription: 'Transform your life through the power of your subconscious mind.',
    icon: 'brain',
    benefits: [
      'Release limiting beliefs and negative patterns',
      'Overcome anxiety and stress',
      'Enhance self-confidence and self-esteem',
      'Improve sleep quality',
      'Break bad habits and addictions',
      'Accelerate personal growth'
    ],
    whoItsFor: [
      'Individuals seeking to overcome anxiety or phobias',
      'Those wanting to break free from limiting beliefs',
      'People looking to improve self-confidence',
      'Anyone ready for deep personal transformation'
    ],
    duration: '60-90 minutes',
    price: 'Starting at $150/session'
  },
  {
    id: '2',
    slug: 'energy-healing',
    title: 'Energy Healing & Reiki',
    description: 'Restore balance and harmony to your energy field through gentle, powerful healing techniques. Our energy healing sessions promote physical, emotional, and spiritual wellbeing by clearing blockages and revitalizing your life force.',
    shortDescription: 'Restore balance and harmony to your body, mind, and spirit.',
    icon: 'sparkles',
    benefits: [
      'Clear energy blockages and stagnation',
      'Reduce physical pain and tension',
      'Promote deep relaxation and peace',
      'Enhance emotional wellbeing',
      'Accelerate healing processes',
      'Balance chakras and energy centers'
    ],
    whoItsFor: [
      'Those experiencing physical or emotional pain',
      'Individuals seeking deeper spiritual connection',
      'People feeling energetically drained',
      'Anyone wanting to enhance overall wellbeing'
    ],
    duration: '60 minutes',
    price: 'Starting at $120/session'
  },
  {
    id: '3',
    slug: 'past-life-regression',
    title: 'Past Life Regression Therapy',
    description: 'Explore the profound wisdom of your past lives to understand current challenges and patterns. This therapeutic approach helps you gain insights, heal old wounds, and release karmic patterns affecting your present life.',
    shortDescription: 'Discover the wisdom of your soul\'s journey through time.',
    icon: 'layers',
    benefits: [
      'Gain insights into current life patterns',
      'Heal past-life traumas and wounds',
      'Understand karmic relationships',
      'Release deep-seated fears and phobias',
      'Discover your soul\'s purpose',
      'Achieve greater self-awareness'
    ],
    whoItsFor: [
      'Curious individuals open to exploring consciousness',
      'Those experiencing unexplained fears or patterns',
      'People seeking deeper understanding of their life path',
      'Anyone interested in spiritual growth'
    ],
    duration: '90-120 minutes',
    price: 'Starting at $180/session'
  },
  {
    id: '4',
    slug: 'spiritual-counseling',
    title: 'Spiritual Counseling',
    description: 'Navigate life\'s challenges with wisdom and compassion through personalized spiritual guidance. Our sessions provide clarity, direction, and support as you align with your highest path and purpose.',
    shortDescription: 'Find clarity, purpose, and peace on your spiritual journey.',
    icon: 'heart',
    benefits: [
      'Gain clarity on life purpose and direction',
      'Navigate major life transitions',
      'Develop deeper self-awareness',
      'Enhance spiritual connection',
      'Receive compassionate guidance',
      'Create alignment with your values'
    ],
    whoItsFor: [
      'Individuals at a crossroads in life',
      'Those seeking meaning and purpose',
      'People going through major transitions',
      'Anyone wanting to deepen their spiritual practice'
    ],
    duration: '60-75 minutes',
    price: 'Starting at $130/session'
  },
  {
    id: '5',
    slug: 'meditation-coaching',
    title: 'Meditation & Mindfulness Coaching',
    description: 'Learn powerful meditation techniques tailored to your needs. Our personalized coaching helps you develop a sustainable practice that brings peace, clarity, and inner strength into your daily life.',
    shortDescription: 'Cultivate inner peace and mindfulness with personalized guidance.',
    icon: 'sun',
    benefits: [
      'Reduce stress and anxiety',
      'Improve focus and concentration',
      'Enhance emotional regulation',
      'Develop greater self-awareness',
      'Create lasting inner peace',
      'Build resilience to life\'s challenges'
    ],
    whoItsFor: [
      'Beginners wanting to start a meditation practice',
      'Experienced practitioners seeking to deepen their practice',
      'Those dealing with high stress or anxiety',
      'Anyone wanting more peace in daily life'
    ],
    duration: '45-60 minutes',
    price: 'Starting at $100/session'
  },
  {
    id: '6',
    slug: 'sound-healing',
    title: 'Sound Healing Therapy',
    description: 'Experience the transformative power of sound vibrations. Using crystal singing bowls, gongs, and other sacred instruments, we create healing frequencies that restore harmony to your body, mind, and spirit.',
    shortDescription: 'Heal and restore through the vibrational power of sound.',
    icon: 'music',
    benefits: [
      'Deep relaxation and stress relief',
      'Balance brainwave states',
      'Release emotional blockages',
      'Improve sleep quality',
      'Enhance creativity and intuition',
      'Restore energetic balance'
    ],
    whoItsFor: [
      'Those seeking deep relaxation',
      'Individuals with sleep issues',
      'People wanting to enhance creativity',
      'Anyone open to vibrational healing'
    ],
    duration: '60 minutes',
    price: 'Starting at $110/session'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}

