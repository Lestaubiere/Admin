import { useMemo } from 'react';
import { Button } from '..';

import './Pagination.css';

interface Props {
  page: number;
  perPage: number;
  total: number;
  disabled?: boolean;
  onChange(page: number): void;
}

function Pagination(props: Props) {
  const totalPages = useMemo<number>(() => {
    return Math.ceil(props.total / props.perPage);
  }, [props.perPage, props.total]);

  if (totalPages === 1) {
    return null;
  }

  return (
    <div className="Pagination">
      <Button
        type="primary"
        disabled={props.page === 1 || props.disabled}
        onClick={() => props.onChange(props.page - 1)}
      >
        Page précédente
      </Button>
      <div>
        Page {props.page} sur {totalPages}
      </div>
      <Button
        type="primary"
        disabled={props.page === totalPages || props.disabled}
        onClick={() => props.onChange(props.page + 1)}
      >
        Page suivante
      </Button>
    </div>
  );
}

export default Pagination;
