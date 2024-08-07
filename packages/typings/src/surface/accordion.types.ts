export interface AccordionProperties {
  /**
   * Informs which accordion item is open by default, this value must be the same as informed in the index of each item
   */
  selectedDefault?: string;
  /**
   * Disables the accordion, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}
