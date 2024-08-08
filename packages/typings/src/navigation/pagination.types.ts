import { PaginationVariants } from "@rarui/styles";

export interface PaginationTyping {
  /**
   * The currently selected page.
   */
  activePage: number;
  /**
   * The total number of pages.
   */
  pageCount: number;
  /**
   * Determines whether page numbers should be shown.
   * @default true
   */
  showNumbers?: boolean;
  /**
   * Determines whether page arrows should be shown.
   * @default true
   */
  showArrows?: boolean;
  /**
   * Called with event and page number when a page is clicked.
   * @TJS-type (page: number) => void;
   */
  onPageChange: (page: number) => void;
}

export type PaginationProperties = PaginationTyping & PaginationVariants;
