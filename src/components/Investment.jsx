import Money from './Money';
import Month from './Month';
import Percentage from './Percentage';

export default function Investment({ children: investment }) {
  const { description, reports, earning, totalPercentage } = investment;
  return (
    <div className="my-4">
      <div className="border p-2 m-2">
        <h2 className="text-center font-semibold">{description}</h2>
        <h3 className="text-center text-sm">
          Rendimento Total:{' '}
          <Money positive={totalPercentage >= 0}>{earning}</Money> |{' '}
          <Percentage>{totalPercentage}</Percentage>
        </h3>
      </div>

      <ul>
        {reports.map(({ id, month, year, value, percentage }) => {
          return (
            <li
              key={id}
              className="flex flex-row items-center justify-start space-x-8 m-2"
            >
              <span className="font-mono">
                <Month>{month}</Month>/{year}
              </span>
              <span className="flex-grow">
                <Money positive={percentage >= 0}>{value}</Money>
              </span>
              <span>
                <Percentage>{percentage}</Percentage>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
