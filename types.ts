
export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  reading_time_minutes: number;
  cover_image: string | null;
  user: {
    name: string;
    username: string;
    profile_image_90: string;
  };
}
