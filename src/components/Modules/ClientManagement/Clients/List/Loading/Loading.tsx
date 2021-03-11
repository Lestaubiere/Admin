import { LoadingGradient } from '../../../../../Core';

export function Loading() {
  return (
    <div className="CM-ClientsList CM-ClientsList--loading">
      <div className="CM-ClientsListHeader">
        <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--title">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--name">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--email">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--phone">
          <LoadingGradient width="100%" height="24px" />
        </div>
      </div>
      <div className="CM-ClientsList__content">
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <div key={key} className="CM-Client">
            <div className="CM-Client__header">
              <div className="CM-Client__column CM-Client__column--title">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Client__column CM-Client__column--name">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Client__column CM-Client__column--email">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Client__column CM-Client__column--phone">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Client__column CM-Client__column--toggle">
                <LoadingGradient width="70px" height="24px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
