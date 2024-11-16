// project import
import Routes from './routes';
import ThemeCustomization from './themes';
import Locales from './components/Locales';
import RTLLayout from './components/RTLLayout';
import ScrollTop from './components/ScrollTop';
import Snackbar from './components/@extended/Snackbar';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { FirebaseProvider as AuthProvider } from './contexts/FirebaseContext';
import { sliceKey as MenuSliceKey, reducer as menuReducer } from './store/reducers/menu';
import { sliceKey as SnackbarSliceKey, reducer as SnackbarReducer } from './store/reducers/snackbar';
import { sliceKey as AuthSliceKey, reducer as AuthReducer } from './sections/auth/redux/slice';
import { AuthRepoSaga } from './sections/auth/redux/saga';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //




const App = () => {
  useInjectReducer({ key: SnackbarSliceKey, reducer: SnackbarReducer });
  useInjectReducer({ key: MenuSliceKey, reducer: menuReducer });
  useInjectReducer({
    key: AuthSliceKey,
    reducer: AuthReducer
  });
  useInjectSaga({ key: AuthSliceKey, saga: AuthRepoSaga });



  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Routes />
                <Snackbar />
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
};

export default App;
