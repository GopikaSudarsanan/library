using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Login.Component.RNReactNativeLoginComponent
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeLoginComponentModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeLoginComponentModule"/>.
        /// </summary>
        internal RNReactNativeLoginComponentModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeLoginComponent";
            }
        }
    }
}
