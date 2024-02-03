    print(SequenceLength(+readline()))
    function SequenceLength(n) {
        if (n === 1) return;

        if (n & 1) return SequenceLength(3 * n + 1) + 1

        return SequenceLength(n / 2) + 1
    }