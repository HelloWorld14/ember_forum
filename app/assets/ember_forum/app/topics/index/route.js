import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                'id': 1,
                'title': 'Topic 1',
                'created_at': 'Вчера'
            },
            {
                'id': 2,
                'title': 'Topic 2',
                'created_at': 'Вчера'
            },
            {
                'id': 3,
                'title': 'Topic 3',
                'created_at': 'Сегодня'
            }
        ];
    }
});
