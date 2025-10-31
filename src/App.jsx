import Navbar from './components/Navbar';
import TurnoCard from './components/TurnoCard';
import Container from './components/Container';
import { turnos } from './data/turnos';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Lista de Turnos</h1>
        {turnos.map((t) => (
          <TurnoCard key={t.id} turno={t} />
        ))}
      </Container>
    </>
  );
}

export default App;
