import Header from '../components/Header';
import Investment from '../components/Investment';
import Investments from '../components/Investments';
import Main from '../components/Main';
import { backEnd } from '../data/investData';

export default function ReactInvestmentsPage() {
  return (
    <div>
      <Header>react-investments</Header>

      <Main>
        <Investments>
          {backEnd.map(investment => {
            return <Investment key={investment.id}>{investment}</Investment>;
          })}
        </Investments>
      </Main>
    </div>
  );
}
