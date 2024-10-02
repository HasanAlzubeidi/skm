import { paths, components } from '@/generated/api';

export type MarshalsRequest =
  paths['/api/marshals']['get']['responses']['200']['content']['application/json'];

export type Marshal = components['schemas']['Marshal'];

export type LeaderboardEntry = components['schemas']['LeaderboardEntry'];

export type Event = components['schemas']['Event'];
