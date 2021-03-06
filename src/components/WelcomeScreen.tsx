import PunishmentStateMachine from '../state';
import * as React from 'react';


interface WelcomeScreenProps {
    fsm: PunishmentStateMachine;
    onCustom(): void;
    onPreset(): void;
    onReport(): void;
}


export default class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
    render() {
        return (
            <div className="container my-4">
                <div className="jumbotron">
                    <h1 className="display-3">Corner Time!</h1>
                    <p className="lead">
                        So you have been naughty? I will put you in the corner and use your
                        webcam to make sure you do not move!
                    </p>
                    <button className="btn btn-primary btn-block btn-lg my-4" onClick={this.start}>
                        Start a 10–15 Minute Punishment Now
                    </button>
                    <p className="text-muted text-center"><small>
                        There will be voice instructions. Set your webcam 2–3 meters away from where you will be
                        standing. Make sure your computer will not lock or sleep (OS X: <code>caffeinate -d</code>).
                    </small></p>
                    <p className="text-muted text-center"><small>
                        Don't worry! Video from your webcam <strong>will not be sent</strong> over the Internet.{' '}
                    </small></p>
                    <p className="text-center">
                        <button className="btn btn-link" onClick={this.props.onCustom}>
                            Design a Custom Punishment
                        </button>
                        <button className="btn btn-link" onClick={this.props.onPreset}>
                            Carry Out a Custom Punishment
                        </button>
                        <button className="btn btn-link" onClick={this.props.onReport}>
                            View a Punishment Report
                        </button>
                    </p>
                </div>

                <p className="text-muted text-center"><small>
                    <strong>2019-05-07:</strong> The application works in modern browsers again!
                </small></p>
                <p className="text-muted text-center"><small>
                    <a href="https://github.com/cornertime/cornertime" target="_blank" rel="noopener noreferrer">Source Code</a>
                </small></p>
            </div>
        );
    }

    start = () => this.props.fsm.getReady();
}
