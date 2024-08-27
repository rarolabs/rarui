# Changelog

This package is intended for internal use in creating components with polymorphic typing.

## 2024-08-26 `2.0.1`

#### 🐛 Bug fixes

- Corrigido tipagens de `onChange`, `value` e `defaultValue`. ([#99](https://git.rarolabs.com.br/frontend/rarui/-/merge_requests/99) by [@junior](https://git.rarolabs.com.br/junior))

#### 🎉 New features

- Adioconado nova tipagem de `minDate` e `maxDate` ao tipo do `DatePickerProps`. ([#99](https://git.rarolabs.com.br/frontend/rarui/-/merge_requests/99) by [@junior](https://git.rarolabs.com.br/junior))

## 2024-08-07 `2.0.0`

#### 🎉 New features

- Added all agnostic types of the components and removed useRefObjectAsForwardedRef hook and types that support dynamic typing of polymorphic components. ([#88](https://git.rarolabs.com.br/frontend/rarui/-/merge_requests/88) by [@vinicius.osmainchi](https://git.rarolabs.com.br/vinicius.osmainchi))

## 2024-03-22 `1.0.0`

#### 🎉 New features

- Added useRefObjectAsForwardedRef hook used to sync ref object with forwarded ref and allow local access to instance reference with `.current`. ([#4](https://git.rarolabs.com.br/frontend/rarui/pull/4) by [@junior](https://git.rarolabs.com.br/junior))
- Added types that support dynamic typing of polymorphic components. ([#4](https://git.rarolabs.com.br/frontend/rarui/pull/4) by [@junior](https://git.rarolabs.com.br/junior))
