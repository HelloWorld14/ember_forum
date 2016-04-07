export default function() {
    this.transition(
        this.fromRoute('topics.index'),
        this.toRoute('topics.show'),
        this.use('fade'),
        this.reverse('fade')
    );

    this.transition(
        this.fromRoute('topics.index'),
        this.toRoute('topics.new'),
        this.use('fade'),
        this.reverse('fade')
    );
}
