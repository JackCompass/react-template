import { stateManagementAtom } from "app/states/atoms";
import { useAtomValue } from "jotai";

export function Welcome() {
  const stateManagement = useAtomValue(stateManagementAtom);
  return (
    <>
      <main>
        <h2>Starting Point</h2>
        <p>State Management: {stateManagement.toUpperCase()}</p>
      </main>
    </>
  );
}
