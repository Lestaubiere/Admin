export enum StatisticsActions {
  FETCH_STATISTICS__REQUEST = '@@statistics/FETCH_STATISTICS__REQUEST',
  FETCH_STATISTICS__SUCCESS = '@@statistics/FETCH_STATISTICS__SUCCESS',
  FETCH_STATISTICS__FAIL = '@@statistics/FETCH_STATISTICS__FAIL',
}

export type StatisticsState = {
  loading: boolean;
  newBookings: number;
  bookingsPreviousSeason: number;
  bookingsNextSeason: number;
  bookingsThisYear: number;
  bookingsByMonth: { month: string; amount: string }[];
};

type getStatisticsRequestActionType = {
  type: StatisticsActions.FETCH_STATISTICS__REQUEST;
};

type getStatisticsSuccessActionType = {
  type: StatisticsActions.FETCH_STATISTICS__SUCCESS;
  payload: {
    newBookings: number;
    bookingsPreviousSeason: number;
    bookingsNextSeason: number;
    bookingsThisYear: number;
    bookingsByMonth: { month: string; amount: string }[];
  };
};

type getStatisticsFailActionType = {
  type: StatisticsActions.FETCH_STATISTICS__FAIL;
};

export type getStatisticsActionType =
  | getStatisticsRequestActionType
  | getStatisticsSuccessActionType
  | getStatisticsFailActionType;

export type StatisticsActionTypes = getStatisticsActionType;
