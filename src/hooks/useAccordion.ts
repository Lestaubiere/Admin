import { RefObject, useLayoutEffect, useState } from 'react';

function useAccordion(ref: RefObject<any>, isOpen?: boolean): [string | undefined] {
  const [contentHeight, setContentHeight] = useState<string | undefined>(undefined);

  useLayoutEffect(() => {
    if (ref.current) {
      if (isOpen) {
        setContentHeight(`${ref.current.clientHeight}px`);

        setTimeout(() => {
          setContentHeight('auto');
        }, 300);
      } else {
        if (contentHeight === 'auto') {
          setContentHeight(`${ref.current.clientHeight}px`);

          setTimeout(() => {
            setContentHeight('0px');
          }, 100);
        } else {
          setContentHeight('0px');
        }
      }
    }
  }, [isOpen]);

  return [contentHeight];
}

export default useAccordion;
