// con children: los componentes hijos que se pasen a Container

export default function Container({ children }) {
  return <div className="container py-4">{children}</div>;
}
