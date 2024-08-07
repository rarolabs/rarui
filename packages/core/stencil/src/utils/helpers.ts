/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */

export const arrayFilterEmpty = (
  array: {
    test: RegExp;
    loader?: string;
    use?: any;
    exclude?: RegExp;
    options?: any;
  }[],
) => array.filter((x) => !!x);
