export interface ProfilePoint {
    label: string;
    point: number;
    isFinal?: boolean;
    canReturn?: boolean;
}
export const PROFILE_SECTION: ProfilePoint[] = [
    {
        label: 'Realistic',
        point: 0
    },
    {
        label: 'Investigative',
        point: 0
    },
    {
        label: 'Artistic',
        point: 0
    },
    {
        label: 'Social',
        point: 0
    },
    {
        label: 'Enterprising',
        point: 0
    },
    {
        label: 'Conventional',
        point: 0
    },
];
