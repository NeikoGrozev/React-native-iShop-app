import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './customDrawerContent/CustomDrawerContent';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import OnBoarding from '../../../screen/onBoarding/OnBoarding';
import TabNav from '../tab/TabNav';
import Spinner from "../../spinner/Spinner";
import Error from "../../error/Error";
import { appAction } from '../../../store/app/slice';
import { accountAction } from '../../../store/account/slice';
import { getErrorMessage, isSpinnerVisible } from '../../../store/app/selectors';
import { isOnBoarding } from '../../../store/account/selectors';
import { getOnBoardingCompleteFromStorage } from '../../../api/helpers/firebaseHelper';
import { DrawerName } from '../../../types/navigation';
import { colors } from '../../../constants/colors';

const DrawerNav = () => {
    const dispatch = useAppDispatch();
    const [isLoadingOnboardingStatus, setIsLoadingOnboardingStatus] = useState(true);
    const Drawer = createDrawerNavigator();
    const showSpinner = useAppSelector(isSpinnerVisible);
    const errorMessage = useAppSelector(getErrorMessage);
    const onBoardingComplete = useAppSelector(isOnBoarding);

    const checkOnboarding = async () => {
        dispatch(appAction.setSpinnerIsVisible(true));
        const complete = Boolean(await getOnBoardingCompleteFromStorage());
        complete && dispatch(accountAction.setOnboardingComplete());
        dispatch(appAction.setSpinnerIsVisible(false));
        setIsLoadingOnboardingStatus(false);
    };

    useEffect(() => {
        checkOnboarding();
    }, [onBoardingComplete]);

    return (
        <>
            {onBoardingComplete ? (
                <>
                    <Drawer.Navigator
                        drawerContent={() => <CustomDrawerContent />}
                        screenOptions={{
                            headerShown: false
                        }}>
                        <Drawer.Screen name={DrawerName.Drawer} component={TabNav} />
                    </Drawer.Navigator>

                </>
            ) : (
               !isLoadingOnboardingStatus &&  <OnBoarding />
            )}
            {showSpinner && <Spinner size={'large'} color={colors.deepskyblue} fullscreen={false} />}
            {errorMessage && <Error errorMessage={errorMessage} />}
        </>
    );
};

export default DrawerNav;