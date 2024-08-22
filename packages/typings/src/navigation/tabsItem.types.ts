export interface TabsItemProperties {
  /**
   * A callback function that is called when a tab is clicked.
   * This function receives the index of the selected tab as a parameter.
   * @TJS-type (tab: number) => void
   */
  onSelectTab?: (tab: number) => void;
}
