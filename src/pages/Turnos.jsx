import Container from '../components/Container';
import TurnoCard from '../components/TurnoCard';
import { turnos } from '../data/turnos';

export default function Turnos() {
  return (
    <Container>
      <h2 className="mb-4">Turnos asignados</h2>
      {turnos.map((t) => (
        <TurnoCard key={t.id} turno={t} />
      ))}
    </Container>
  );
}
