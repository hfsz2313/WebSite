export function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        () => {
            alert(`Copied to clipboard`);
        },
        () => {
            /* failure */
        },
    );
}
