import * as third_party from 'third-party/third-party';

window.requestAnimationFrame(() => {
    new third_party.GameManager(4, third_party.KeyboardInputManager, third_party.HTMLActuator, third_party.LocalStorageManager);
});
