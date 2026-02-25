/**
 * Core logic for finding venue pairs of the Two_Sum alg problem.
 */
export function findVenuePair(venues: number[], target: number): [number, number] | null {
    const seen = new Map<number, number>();

    for (let i = 0; i < venues.length; i++) {
        const currentVenue = venues[i];
        const complement = target - currentVenue;

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        if (!seen.has(currentVenue)) {
            seen.set(currentVenue, i);
        }
    }
    return null;
}