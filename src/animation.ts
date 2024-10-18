import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

// 定義可重用的 showUpAnimation
export const showUpAnimation = trigger('showUpAnimation', [
  transition(':enter', [
    query('@*', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

// 定義可重用的 itemAnimation
export const itemAnimation = trigger('itemAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);
