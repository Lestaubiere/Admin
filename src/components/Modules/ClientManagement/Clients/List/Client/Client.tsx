import { useRef } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { Client as IClient, TitleMapper } from '../../../../../../types';
import { useAccordion } from '../../../../../../hooks';

import { PartialArrowDown } from '../../../../../Icons';

import { Details } from './Details';

import './Client.css';

interface Props {
  client: IClient;
  isVisible?: boolean;
}

export function Client(props: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const history = useHistory();

  const [contentHeight] = useAccordion(contentRef, props.isVisible);

  function handleToggle() {
    if (props.isVisible) {
      history.push('/gestion-clients/clients');
    } else {
      history.push(`/gestion-clients/clients/${props.client.id}`);
    }
  }

  const classes = classNames('CM-Client', {
    'CM-Client--is-visible': props.isVisible,
  });

  return (
    <div className={classes}>
      <div className="CM-Client__header">
        <div className="CM-Client__column CM-Client__column--title">
          {TitleMapper[props.client.title]}
        </div>
        <div className="CM-Client__column CM-Client__column--name">{props.client.name}</div>
        <div className="CM-Client__column CM-Client__column--email">{props.client.email}</div>
        <div className="CM-Client__column CM-Client__column--phone">{props.client.phoneNumber}</div>
        <div className="CM-Client__column CM-Client__column--toggle">
          <button className="CM-Button__toggle" onClick={handleToggle}>
            {props.isVisible ? 'Replier' : 'Déplier'}
            <PartialArrowDown color="var(--color-text)" />
          </button>
        </div>
      </div>
      <div className="CM-Client__content-container" style={{ height: contentHeight }}>
        <div ref={contentRef} className="CM-Client__content">
          <Details client={props.client} isVisible={props.isVisible} />
        </div>
      </div>
    </div>
  );
}

Client.defaultProps = {
  isVisible: false,
};
