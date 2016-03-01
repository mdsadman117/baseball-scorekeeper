angular.module('baseballScorekeeper')
.service('menuService', function() {

  this.getPitcherMenu = function() {
    return [{
              action: 'strike',
              title: 'Strike',
              callback: 'pitch'

            },
            {
              action: 'ball',
              title: 'Ball',
              callback: 'pitch'

            },
            {
              action: 'foul',
              title: 'Foul Ball',
              callback: 'pitch'
            },
            {
              action: 'wildPitch',
              title: 'Wild Pitch',
              callback: 'pitch'

            },
            {
              action: 'passedBall',
              title: 'Passed Ball',
              callback: 'pitch'

            }];
          }

    this.getBatterMenu = function() {
      return[{
        action: 'flyout',
        title: 'Flyout',
        callback: 'ballInPlay',
      },
      {
        action: 'groundout',
        title: 'Groundout',
        callback: 'ballInPlay',
      }]
    };



    this.getRunnerMenu = function() {
      return [{
        action: 'steal',
        title: 'Steal Base',
        callback: 'baseActivity'
      },
      {
        action: 'pickoff',
        title: 'Picked Off',
        callback: 'baseActivity'
      }]
    }
})