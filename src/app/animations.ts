import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({ border: '4px solid #B2B6FF', filter: 'brightness(92%)' })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate('200ms'),
  ]),
]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    // :enter -> quando o elemento entra no dom.
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    // :leave -> quando o elemento sai do dom.
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '300ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0,
    }),
    animate(
      '1000ms cubic-bezier(.13,.9,.8,.1)',
      keyframes([
        style({ offset: 0, opacity: 0, width: 0 }),
        style({ offset: 0.8, opacity: 0.5, width: '*' }),
        style({ offset: 1, opacity: 1, width: '*' }),
      ])
    ),
  ]),
  transition(':leave', [
    animate(
      '1000ms cubic-bezier(.13,.9,.8,.1)',
      style({
        opacity: 0,
        width: 0,
      })
    ),
  ]),
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    animate(600, style([{
      backgroundColor: '#63B77C'
    }])),
    animate(100, style([{
      transform: 'scale(1.1)'
    }])),
    animate(200, style([{
      transform: 'scale(1)'
    }]))
  ])
]);
