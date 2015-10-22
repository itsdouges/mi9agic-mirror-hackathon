'use strict';

import MirrorContent from './components/mirror-content';
import Time from './components/time';

angular
.module('mi9gicMirror', ['ngTouch'])
.directive('mirrorContent', MirrorContent)
.directive('time', Time)
;
