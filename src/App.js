import { AppStyle } from './AppStyle';
import ErrorModule from './components/error-module/ErrorModule';
import Todo from './components/todo/Todo';

function App() {
  return (
    <AppStyle>
      <Todo />
      {/* <ErrorModule/> */}
    </AppStyle>
  );
}

export default App;
