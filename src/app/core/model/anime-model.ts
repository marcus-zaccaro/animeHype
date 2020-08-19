export interface AnimeModel {
    id: string;
    type: string;
    links: Links;
    attributes: Attributes;
    relationships: Relationships;
}

interface Relationships {
    genres: Relationship;
    categories: Relationship;
    castings: Relationship;
    installments: Relationship;
    mappings: Relationship;
    reviews: Relationship;
    mediaRelationships: Relationship;
    characters: Relationship;
    staff: Relationship;
    productions: Relationship;
    quotes: Relationship;
    episodes: Relationship;
    streamingLinks: Relationship;
    animeProductions: Relationship;
    animeCharacters: Relationship;
    animeStaff: Relationship;
}

interface Relationship {
    links: RelationshipLink;
}

interface RelationshipLink {
    self: string;
    related: string;
}

interface Attributes {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    description: string;
    coverImageTopOffset: number;
    titles: Titles;
    canonicalTitle: string;
    abbreviatedTitles: string[];
    averageRating: string;
    ratingFrequencies: RatingFrequencies;
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease?: any;
    popularityRank: number;
    ratingRank: number;
    ageRating: string;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    tba?: any;
    posterImage: PosterImage;
    coverImage: CoverImage;
    episodeCount: number;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    showType: string;
    nsfw: boolean;
}

interface CoverImage {
    tiny: string;
    small: string;
    large: string;
    original: string;
    meta: Meta;
}

interface Meta {
    dimensions: Dimensions;
}

interface PosterImage {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    original: string;
    meta: Meta;
}

interface Dimensions {
    tiny: Tiny;
    small: Tiny;
    medium: Tiny;
    large: Tiny;
}

interface Tiny {
    width: number;
    height: number;
}

interface RatingFrequencies {
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '10': string;
    '11': string;
    '12': string;
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '17': string;
    '18': string;
    '19': string;
    '20': string;
}

interface Titles {
    en: string;
    en_jp: string;
    ja_jp: string;
}

interface Links {
    self: string;
}
