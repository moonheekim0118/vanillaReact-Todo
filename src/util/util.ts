export const changeTitle = (title: string) => {
    const elem = document.querySelector("title");
    if (elem) {
        elem.innerText = title;
    }
};

// 디바운싱 함수
export const debounce = (func: (any: any) => void, limit: number) => {
    let inDebounce;

    return function (event) {
        const value = event.target?.value;
        const context = this;
        if (inDebounce) {
            clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(func.bind(context, value), limit);
    };
};

// 쓰로틀링 함수
export const throttling = (func: (any: any) => void, limit: number) => {
    let inThrottle;

    return function (event) {
        const value = event.target[0]?.value;
        if (value) {
            event.target[0].value = ""; // 이전 value 비워주기
        }
        const context = this;
        if (!inThrottle) {
            func.apply(context, [value]);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// children 내부에서 특정 노드 찾아주는 함수
export const findNodeInChidrenById = (
    id: string,
    children: HTMLCollection
): string => {
    return Object.keys(children).find((key) => children[key].dataset.id === id);
};
