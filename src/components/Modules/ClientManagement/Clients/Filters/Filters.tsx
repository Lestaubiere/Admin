import { Input } from '../../../../Core';

import './Filters.css';

interface Props {
  search?: string;
  onChange(name: string, value: string | null): void;
}

export function Filters(props: Props) {
  return (
    <div className="CM-ClientsFilters">
      <div className="CM-ClientsFilters__column">
        <div className="CM-ClientsFilters__search">
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
    </div>
  );
}
