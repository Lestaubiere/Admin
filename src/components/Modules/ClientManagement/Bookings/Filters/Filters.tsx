import { Status, StatusMapper } from '../../../../../types';
import { Input, Select } from '../../../../Core';

import './Filters.css';

interface Props {
  search?: string;
  status?: string;
  season?: string;
  onChange(name: string, value: string | null): void;
}

export function Filters(props: Props) {
  function getYearList() {
    const startSeason = 2018;
    const nextSeason = new Date().getFullYear() + 1;

    return Array(nextSeason - (startSeason - 1))
      .fill('')
      .map((_value, index) => {
        const value = (nextSeason - index).toString();

        return { value, label: value };
      });
  }

  return (
    <div className="CM-BookingsFilters">
      <div className="CM-BookingsFilters__column">
        <div className="CM-BookingsFilters__search">
          <Input
            name="search"
            type="text"
            label="Recherche"
            placeholder="Nom, email ou numéro de téléphone"
            value={props.search || null}
            required={false}
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="CM-BookingsFilters__column">
        <div className="CM-BookingsFilters__item">
          <Select
            name="status"
            label="Statut"
            value={props.status || null}
            required={false}
            options={Object.keys(StatusMapper).map((key) => ({
              value: key,
              label: StatusMapper[key as Status],
            }))}
            onChange={props.onChange}
            onDelete={(name: string) => props.onChange(name, null)}
          />
        </div>
        <div className="CM-BookingsFilters__item">
          <Select
            name="season"
            label="Saison"
            value={props.season || null}
            required={false}
            options={getYearList()}
            onChange={props.onChange}
            onDelete={(name: string) => props.onChange(name, null)}
          />
        </div>
      </div>
    </div>
  );
}
