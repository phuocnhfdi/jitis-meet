import React from 'react';

import GlobalStyles from '../../base/ui/components/GlobalStyles.web';
import JitsiThemeProvider from '../../base/ui/components/JitsiThemeProvider.web';
import DialogContainer from '../../base/ui/components/web/DialogContainer';
import ChromeExtensionBanner from '../../chrome-extension-banner/components/ChromeExtensionBanner.web';
import OverlayContainer from '../../overlay/components/web/OverlayContainer';

import { AbstractApp } from './AbstractApp';

// Register middlewares and reducers.
import '../middlewares';
import '../reducers';


/**
 * Root app {@code Component} on Web/React.
 *
 * @augments AbstractApp
 */
export class App extends AbstractApp {

    /**
     * Creates an extra {@link ReactElement}s to be added (unconditionally)
     * alongside the main element.
     *
     * @abstract
     * @protected
     * @returns {ReactElement}
     */
    _createExtraElement() {
        return (
            <JitsiThemeProvider>
                <OverlayContainer />
            </JitsiThemeProvider>
        );
    }

    /**
     * Overrides the parent method to inject {@link AtlasKitThemeProvider} as
     * the top most component.
     *
     * @override
     */
    _createMainElement(component: React.ComponentType, props?: Object) {
        return (
            <JitsiThemeProvider>
                <GlobalStyles />
                <ChromeExtensionBanner />
                {/* {super._createMainElement(component, props)} */}
                <div className='row' style={{ height: "100%"}}>


                    <div className='col-3'><div ><img src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/9/2/photo-1-1662103519036751830429.jpg"/></div></div>
                    <div className='col-9'>{super._createMainElement(component, props)}</div>
                </div>

            </JitsiThemeProvider>
        );
    }

    /**
     * Renders the platform specific dialog container.
     *
     * @returns {React$Element}
     */
    _renderDialogContainer() {
        return (
            <JitsiThemeProvider>
                <DialogContainer />
            </JitsiThemeProvider>
        );
    }
}
