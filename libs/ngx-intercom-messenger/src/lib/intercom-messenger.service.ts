import { Injectable, PLATFORM_ID, inject, InjectionToken } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import {
  Intercom,
  getVisitorId,
  hide,
  onHide,
  onShow,
  onUnreadCountChange,
  show,
  showArticle,
  showMessages,
  showNewMessage,
  shutdown,
  startTour,
  trackEvent,
  update,
} from "@intercom/messenger-js-sdk";
import type { UserArgs, IntercomSettings } from "@intercom/messenger-js-sdk/types";

export const INTERCOM_MESSENGER_SETTINGS = new InjectionToken<IntercomSettings>('')

/**
 * A provider with every Intercom.JS method
 */
@Injectable()
export class IntercomMessengerService {
  private platformId = inject(PLATFORM_ID);
  private settings = inject(INTERCOM_MESSENGER_SETTINGS);

  /**
   * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
   * This is useful in situations like a one-page Javascript based application where the user may not be logged in
   * when the page loads. You call this method with the standard intercomSettings object.
   */
  public boot(settings?: IntercomSettings): void {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }
    const app_id = settings?.app_id ?? this.settings?.app_id
    if (!app_id) {
      throw new Error('Please provide Intercom app_id either in module config or in the `boot()` method')
    }
    Intercom(settings ?? this.settings);
  }

  /**
   * If you have the Respond product (combined with another product like Engage)
   * you should call the Intercom shutdown method to clear your users’ conversations anytime they log out
   * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
   * or computer will keep these conversations in the Messenger for one week.
   * This method will effectively clear out any user data that you have been passing through the JS API.
   */
  public shutdown(): void {
    return shutdown();
  }

  /**
   * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
   * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
   * and show them if they exist.
   *
   * Calling the update method with a JSON object of user details will update those fields on the current user
   * in addition to logging an impression at the current URL and looking for new messages for the user.
   */
  public update(data: UserArgs) {
    return update(data)
  }

  /**
   * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
   */
  public hide() {
    return hide()
  }

  /**
   * This will show the Messenger. If there are no conversations it will open with the new message view,
   * if there are it will open with the message list.
   *
   * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
   *
   */
  public show(message?: string): void {
    if (message) {
      return this.showNewMessage(message)
    }
    return show()
  }

  /**
   * To open the message window with the message list you can call `showMessages()`.
   */
  public showMessages(): void {
    return showMessages()
  }

  /**
   * To open the message window with the new message view you can call showNewMessage().
   *
   * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
   */
  public showNewMessage(message?: string): void {
    return showNewMessage(message ?? '')
  }

  /**
   * You can submit an event using the trackEvent method.
   * This will associate the event with the currently logged-in user and send it to Intercom.
   * The final parameter is a map that can be used to send optional metadata about the event.
   *
   * You can also add custom information to events in the form of event metadata.
   */
  public trackEvent(eventName: string, metadata?: Record<string, number | string | boolean>): void {
    return trackEvent(eventName, metadata)
  }

  /**
   * A visitor is someone who goes to your site but does not use the messenger.
   * You can track these visitors via the visitor user_id.
   * This user_id can be used to retrieve the visitor or lead through the REST API.
   */
  public getVisitorId(): string {
    return getVisitorId() as unknown as string
  }

  /**
   * Gives you the ability to hook into the show event. Requires a function argument.
   */
  public onShow(handler: () => void): void {
    return onShow(handler)
  }

  /**
   * Gives you the ability to hook into the hide event. Requires a function argument.
   */
  public onHide(handler: () => void): void {
    return onHide(handler)
  }

  /**
   * This method allows you to register a function that will be called when the current number of unread messages changes.
   */
  public onUnreadCountChange(handler: (unreadCount?: number) => void): void {
    return onUnreadCountChange(handler)
  }

  /**
   * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
   * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
   * the tour can be found in the “Use tour everywhere” section of the tour editor.
   *
   * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
   * turned on. If you're calling this API using an invalid tour id, nothing will happen.
   */
  public startTour(tourId: string): void {
    return startTour(tourId)
  }

  /**
   * If you would like to trigger an article in the Messenger, you can use the showArticle method.
   * The article will be shown within the Messenger, and clicking the Messenger back button will return to the previous context.
   * If the Messenger is closed when the method is called, it will be opened first and then the article will be shown.
   */
  public showArticle(articleId: string): void {
    return showArticle(articleId)
  }

}
