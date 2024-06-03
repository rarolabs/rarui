import React from "react";
import { pagination } from "@rarui/styles";
import { ChevronLeftIcon, ChevronRightIcon } from "@rarui/icons";
import { PaginationProps } from "./pagination.types";
import { DOTS, usePagination } from "./hooks";

const Pagination: React.FC<PaginationProps> = ({
  className: _className,
  style: _style,
  showNumbers = true,
  showArrows = true,
  size = "large",
  activePage,
  pageCount,
  onPageChange,
  ...rest
}) => {
  const paginationRange = usePagination({
    activePage,
    pageCount,
  });

  return (
    <ul {...rest} className={pagination.classnames.container({ size })}>
      {showArrows && (
        <li>
          <button
            data-testid="button-pagination-prev"
            className={pagination.classnames.paginationItem({
              size: size === "dot" ? "large" : size,
            })}
            onClick={() => onPageChange(Number(activePage - 1))}
            disabled={activePage === 1}
          >
            <ChevronLeftIcon size="medium" />
          </button>
        </li>
      )}
      {showNumbers &&
        paginationRange
          ?.filter((page) => (size === "dot" ? page !== DOTS : true))
          ?.map((pageNumber) => (
            <React.Fragment key={crypto.randomUUID()}>
              {pageNumber === DOTS && (
                <li>
                  <button
                    className={pagination.classnames.paginationItem({ size })}
                    data-testid="button-pagination-page-dots"
                    disabled
                  >
                    {pageNumber}
                  </button>
                </li>
              )}
              {pageNumber !== DOTS && (
                <li>
                  <button
                    data-testid={`button-pagination-page-${pageNumber}`}
                    className={pagination.classnames.paginationItem({
                      selected: pageNumber === activePage,
                      size,
                    })}
                    onClick={() => onPageChange(Number(pageNumber))}
                  >
                    {size !== "dot" && pageNumber}
                  </button>
                </li>
              )}
            </React.Fragment>
          ))}
      {showArrows && (
        <li>
          <button
            data-testid="button-pagination-next"
            className={pagination.classnames.paginationItem({
              size: size === "dot" ? "large" : size,
            })}
            onClick={() => onPageChange(Number(activePage + 1))}
            disabled={activePage >= pageCount}
          >
            <ChevronRightIcon size="medium" />
          </button>
        </li>
      )}
    </ul>
  );
};

Pagination.displayName = "Pagination";

export { Pagination };
