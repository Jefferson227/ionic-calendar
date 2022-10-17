import { IonIcon } from '@ionic/react';

interface HeaderButtonsProps {
  iconBack: string;
  iconForward: string;
  toggleMonthSelector: () => void;
  toggleYearSelector: () => void;
  selectPreviousMonth: () => void;
  selectNextMonth: () => void;
  monthName: string;
  year: string;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  iconBack,
  iconForward,
  toggleMonthSelector,
  toggleYearSelector,
  selectPreviousMonth,
  selectNextMonth,
  monthName,
  year,
}) => {
  return (
    <>
      <button className="button button-arrow">
        <IonIcon icon={iconBack} onClick={selectPreviousMonth} />
      </button>

      <button className="button button-month" onClick={toggleMonthSelector}>
        {monthName}
      </button>

      <button className="button button-year" onClick={toggleYearSelector}>
        {year}
      </button>

      <button className="button button-arrow">
        <IonIcon icon={iconForward} onClick={selectNextMonth} />
      </button>
    </>
  );
};

export default HeaderButtons;
